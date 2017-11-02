// runs with model and sequential classes

model = Sequential()
model.add(...)
...
...


model = Model(input=..., output=...)

// once trained, save the weights and export model architecture config:

model.save_weights('model.hdf5')
with open('model.json', 'w') as f:
    f.write(model.to_json())
  
  
// example for ResNet50

from keras.applications import resnet50
model = resnet50.ResNet50(include_top=True, weights='imagenet')
model.save_weights('resnet50.hdf5')
with open('resnet50.json', 'w') as f:
    f.write(model.to_json())
    
    
// The 3 files required for Keras.js are: the model file: model.json; the weights file: model_weights.buf; the weights metadata file: model_metadata.json


<script src="dist/keras.js"></script>



// namespaced
const KerasJS = require('keras-js')
// or
import * as KerasJS from 'keras-js'

// not namespaced
const Model = require('keras-js').Model
// or
import { Model } from 'keras-js'

// create new model
