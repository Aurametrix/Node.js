/*
JS implementation of logistic regression
for demo, see:
http://www.cs.cmu.edu/~yandongl/learningjs/decision-tree-demo.html
example of use in node.js
*/

data_util.loadRealFile(fn_csv, function(D) {

  //normalize data
  data_util.normalize(D.data, D.nfeatures); 

  //logistic regression. following params are optional
  D.optimizer = 'sgd'; //default choice. other choice is 'gd'
  D.learning_rate = 0.005;
  D.l2_weight = 0.000001;
  D.iterations = 1000; //increase number of iterations for better performance

  new learningjs.logistic().train(D, function(model, err){
    if(err) {
      console.log(err);
    } else {
      model.calcAccuracy(D.data, D.targets, function(acc, correct, total){
        console.log('training: got '+correct +' correct out of '+total+' examples. accuracy:'+(acc*100.0).toFixed(2)+'%');
      });
      data_util.loadRealFile(fn_test, function(T) {
        model.calcAccuracy(T.data, T.targets, function(acc, correct, total){
          console.log('    test: got '+correct +' correct out of '+total+' examples. accuracy:'+(acc*100.0).toFixed(2)+'%');
        });
      });
    }
  });
}); 
