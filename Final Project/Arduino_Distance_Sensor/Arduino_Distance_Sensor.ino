# include <Servo.h>

# define TRIG_PIN 9
# define ECHO_PIN 10
//#define SERVO_PIN 6
//#define LED1 3
//#define LED2 4

//Servo myServo;

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  //pinMode(LED1, OUTPUT);
  //pinMode(LED2, OUTPUT);

 // myServo.attach(SERVO_PIN);
  //myServo.write(0);  // innitial position 0°
}

void loop() {
  int distance = getDistance();

  if (distance > 0 && distance <= 25) {
   // myServo.write(180);  // rotate to 180°
    //digitalWrite(LED1, HIGH);  // LED 1 turns on
    //digitalWrite(LED2, HIGH);  // LED 2 turns on
    Serial.println(1);
  } else {
    //myServo.write(0);  // back 0°
    //digitalWrite(LED1, LOW);  // turns off LED 1
    //digitalWrite(LED2, LOW);  // turns off LED 2
    Serial.println(0);
  }

  delay(500);
}


int getDistance() {
  long duration;
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  duration = pulseIn(ECHO_PIN, HIGH, 30000);
  if (duration == 0) return 999;
  return duration * 0.034 / 2;
}
