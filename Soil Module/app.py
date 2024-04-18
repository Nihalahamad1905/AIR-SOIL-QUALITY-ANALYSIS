from flask import Flask, render_template, request, jsonify
import os
import numpy as np
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.models import load_model
from sklearn.preprocessing import LabelEncoder
import io

app = Flask(__name__)

# Load the trained model and label encoder
model = load_model('soil_cnn_model.h5')
label_encoder = LabelEncoder()
label_encoder.classes_ = np.load('label_encoder_classes.npy', allow_pickle=True)

# Define the target size for image preprocessing
target_size = (150, 150)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        # Get the uploaded image file
        image_file = request.files['image']
        if image_file:
            # Read image file data as bytes
            image_data = image_file.read()
            
            # Convert image data to image array
            img = load_img(io.BytesIO(image_data), target_size=target_size)
            img_array = img_to_array(img)
            img_array = np.expand_dims(img_array, axis=0)  # Expand dimensions to match model input shape

            # Make prediction
            prediction = model.predict(img_array)
            predicted_class = label_encoder.inverse_transform(np.argmax(prediction, axis=1))[0]  # Convert prediction array to 1D array

            # Return prediction result as JSON data
            return jsonify({'predictions_text': predicted_class})

    # If no image is uploaded or if an error occurs, return an empty response
    return jsonify({})

if __name__ == "__main__":
    app.run(debug=True)
