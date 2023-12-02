# how to create and use store in project 

first create a store usign configurestore which taks an object as argument 

 second create the intialState of the SpeechRecognitionResultList.e they are basic function

3 create a slice using createSlice (dslice is nothng but a bigger reducer for functionality ), 
 createSlice methods takes object which contain (name of slice , intialState , reducers)
 s
 reducres are methods  takes two arguments (state,action) state gives the aacces to current state of store,,
 we take any parameters from the actions using(action.payload.parametername)

 4 export all the reducer separatly forn sliceName.actions

 5 - export the reducers in alist