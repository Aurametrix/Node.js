import json

from google.cloud import scholarly

# Create a scholarly client
client = scholarly.Client()

# Search for articles
query = "machine learning"
results = client.search(query, num_results=10)

# Get the DOIs of the results
dois = [result["doi"] for result in results]

# Print the DOIs
print(dois)
