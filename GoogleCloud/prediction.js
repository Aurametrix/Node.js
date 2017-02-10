// To train the model, call the prediction.trainedmodels.insert method, 
// passing a unique name for this predictive model, and the location of the training data.
//

POST https://www.googleapis.com/prediction/v1.6/projects/[PROJECT_ID]/trainedmodels
{
 "id": "language-identifier",
 "storageDataLocation": "quickstart-1465256213/language_id.txt"
}

// Use the prediction.trainedmodels.get method to check the status of training, passing the ID of the predictive model
GET https://www.googleapis.com/prediction/v1.6/projects/[PROJECT_ID]/trainedmodels/language-identifier
