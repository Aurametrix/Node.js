const BrewChain = function() {
    let chain = [];
    let currentBlock = {};
    let genesisBlock = {};

    function init(){
        genesisBlock = { 
            index: 0
          , timestamp: new Date().getTime()
          , data: 'our genesis data'
          , previousHash: "-1"
        };

        genesisBlock.hash = createHash(genesisBlock);
        chain.push(genesisBlock);
        currentBlock = genesisBlock; 	
    }

    function createHash({ timestamp, data, index, previousHash }) {
        return Crypto.createHash('SHA256').update(timestamp+data+index+previousHash).digest('hex');
    }

    function addToChain(block){
        if(checkNewBlockIsValid(block, currentBlock)){	
            chain.push(block);
            currentBlock = block; 
            return true;
        }

        return false;    
    }

    function createBlock(data){
        let newBlock = {
            timestamp: new Date().getTime()
          , data: data
          , index: currentBlock.index+1
          , previousHash: currentBlock.hash
        };

        newBlock.hash = createHash(newBlock);
  
        return newBlock;
    }

    function getLatestBlock(){
        return currentBlock;
    }

    function getTotalBlocks(){
        return chain.length;
    }

    function getChain(){
        return chain;
    }

    function checkNewBlockIsValid(block, previousBlock){
        if(previousBlock.index + 1 !== block.index){
            //Invalid index
            return false;
        }else if (previousBlock.hash !== block.previousHash){
            //The previous hash is incorrect
            return false;
        }else if(!hashIsValid(block)){
            //The hash isn't correct
            return false;
        }
		
        return true;
    }	

    function hashIsValid(block){
        return (createHash(block) == block.hash);
    }

    return {
        init,
        createBlock,
        addToChain,
        checkNewBlockIsValid,
        getLatestBlock,
        getTotalBlocks,
        getChain
    }
};    

let myBrew = new BrewChain();
myBrew.init();

myBrew.addToChain(myBrew.createBlock('The 1st block'));
myBrew.addToChain(myBrew.createBlock('The 2nd block'));

