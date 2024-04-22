# PROBLEM STATEMENT :  
The area is facing high levels of air and soil pollution, posing risks to public health, ecosystems, 
and agriculture. Current monitoring efforts are inadequate and fail to address the link between air and 
soil quality. This lack of data hinders pollution mitigation and sustainable development. Without action, 
the situation will worsen health issues, harm ecosystems, and hinder progress. A systematic analysis is 
needed to understand the pollution, identify sources, and develop targeted interventions for human and 
environmental health.

# INTRODUCTION : 
Taking care of our environment is essential, and to do that, we need a smart web application. 
This app will help us keep a close eye on the air we breathe and the health of our soil. Using Amazon 
Web Services (AWS) and some clever computer learning tricks, our goal is to make a useful tool. This 
tool will give us quick insights, make predictions, and show information in easy to understand pictures. 
By bringing together data from different places and using fancy computer techniques, our app will help 
us make smart decisions to take care of our environment.  
## Air Analysis : 
We want to know if the air around us is clean and safe. So, our tool will check for things 
like dust, pollution, and other stuff that might be in the air. This helps us breathe better and keeps our 
sky clear. 
## Soil Analysis : 
The ground we walk on is like the Earth's skin. We want to make sure it's healthy. Our 
tool will check if the soil has enough nutrients for plants to grow, if it's not too dry or too wet, and if 
there are any harmful things in it. Healthy soil means healthy plants and a happy environment. 
# Data Flow Diagram
![image](https://github.com/Nihalahamad1905/AIR-SOIL-QUALITY-ANALYSIS/assets/118530992/b3275502-a5c9-44f5-a382-e5c4e3fd5b1b)
#  METHODOLOGY:  
## AIR QUALITY INDEX CALCULATION USING WEATHER API: 
1. Location Input : Receive user input for the desired location(s) for air quality analysis. 
2. Integration with Weather API : Interface with a weather API to fetch real-time meteorological data and air pollutant concentrations for the specified location(s). 
3. Visualization and Presentation: Present the calculated AQI values for the specified location(s) in a user-friendly web interface/Display AQI values using color-coded categories (e.g., good, moderate, unhealthy, hazardous) 
for easy interpretation. 

## SOIL QUALITY ANALYSIS USING MACHINE LEARNING: 
1. Data Collection :  Capture images of soil samples using a digital camera or smartphone camera. 
2. Data Pre-processing : Convert the annotated soil images into suitable input data formats for machine learning algorithms, 
3. Model Training : Utilize supervised machine learning algorithms, such as convolutional neural networks (CNNs), to train a soil quality classification model. 
4. Model Evaluation : Evaluate the trained model on the test set to assess its ability to predict soil quality attributes accurately. 
5. Prediction and Deployment : Deploy the trained machine learning model to predict soil quality attributes for new, unseen soil samples. 
6. Validation and Feedback : Validate the model predictions against ground truth measurements or expert assessments to verify accuracy and reliability.

# Contributers 
1. Sanika Milind Jadhav
2. Thorar Shraddha Sudhakar
3. Karuna Kadam
