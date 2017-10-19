
PImage img0;  // Declare variable "a" of type PImage
PImage img1;
PImage img2;
int curImage;

void setup() {
  size(640, 500);
  // The image file must be in the data folder of the current sketch 
  // to load successfully
  img0 = loadImage("img00.jpg");  // Load the image into the program  
  img1 = loadImage("img01.jpg");
  img2 = loadImage("img02.jpg");
  
  curImage = 0;
}

void draw() {
  
  if(frameCount%20 == 0){
    if(curImage < 2){
       curImage++;
    }
    else curImage=0;
  }
  
  if(curImage==0){
    image(img0,0,0);
  }
  else if(curImage==1){
    image(img1,0,0);
  }
  else if(curImage==2){
    image(img2,0,0);
  }
  
}
