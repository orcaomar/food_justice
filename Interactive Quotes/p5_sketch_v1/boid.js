/*  
 * Reference: 
 * @name Flocking
 * @description Demonstration of <a href="http://www.red3d.com/cwr/">Craig Reynolds' "Flocking" behavior</a>.<br>
 * (Rules: Cohesion, Separation, Alignment.)<br>
 * From <a href="http://natureofcode.com">natureofcode.com</a>.
 */
// Tweaked Boid class
class Boid {
    constructor(x, y) {
      this.acceleration = createVector(0, 0);
      this.velocity = p5.Vector.random2D();
      this.position = createVector(x, y);
      this.r = 3.0;
      this.maxspeed = 2;    // Maximum speed
      this.maxforce = 0.05; // Maximum steering force
    }
  
    run(boids) {
      this.flock(boids);
      this.update();
      this.borders();
      this.render();
    }
    
    // Forces go into acceleration
    applyForce(force) {
      this.acceleration.add(force);
    }
    
    // We accumulate a new acceleration each time based on three rules
    flock(boids) {
      let sep = this.separate(boids); // Separation
      let ali = this.align(boids);    // Alignment
      let coh = this.cohesion(boids); // Cohesion
      // Arbitrarily weight these forces
      sep.mult(2.5);
      ali.mult(1.0);
      coh.mult(1.0);
      // Add the force vectors to acceleration
      this.applyForce(sep);
      this.applyForce(ali);
      this.applyForce(coh);
    }
    
    // Method to update location
    update() {
      // Update velocity
      this.velocity.add(this.acceleration);
      // Limit speed
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      // Reset acceleration to 0 each cycle
      this.acceleration.mult(0);
    }
    
    // A method that calculates and applies a steering force towards a target
    // STEER = DESIRED MINUS VELOCITY
    seek(target) {
      let desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
      // Normalize desired and scale to maximum speed
      desired.normalize();
      desired.mult(this.maxspeed);
      // Steering = Desired minus Velocity
      let steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce); // Limit to maximum steering force
      return steer;
    }
    
    // Draw boid as desired graphic  *************************************************************************************
    render() {
      
      // text
      noStroke(); 
      fill(0);
      text('food justice', this.position.x * PI, this.position.y);
      //fill(255, 87, 127);
      text('community', this.position.x, this.position.y);
      //fill(255, 116, 75);
      text('inclusion', this.position.x, this.position.y / 2);
      //fill(50, 255, 15);
      text('accessibility', this.position.x / 2, this.position.y);
      //fill(150, 155, 15);
      text('support', this.position.y / 2, this.position.x);
      
      push(); 
      // Luann
      image(img1,this.position.y,this.position.x, 150, 150);
      pop(); 
      
      push(); 
      // Mohammed 
      image(img2,this.position.x * 2,this.position.y, 150, 150);
      pop(); 
      
      push(); 
      // Nusret
      image(img3,this.position.y,this.position.x * 2, 150, 150);
      pop(); 
      
      push(); 
      // Shaista
      image(img4,this.position.x * 1.5,this.position.x, 150, 150);
      pop(); 
  
    } //--end *************************************************************************************************************
    
    // Wraparound
    borders() {
      if (this.position.x < -this.r) this.position.x = width + this.r;
      if (this.position.y < -this.r) this.position.y = height + this.r;
      if (this.position.x > width + this.r) this.position.x = -this.r;
      if (this.position.y > height + this.r) this.position.y = -this.r;
    }
    
    // Separation
    // Method checks for nearby boids and steers away
    separate(boids) {
      let desiredseparation = 25.0;
      let steer = createVector(0, 0);
      let count = 0;
      // For every boid in the system, check if it's too close
      for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);
        // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
        if ((d > 0) && (d < desiredseparation)) {
          // Calculate vector pointing away from neighbor
          let diff = p5.Vector.sub(this.position, boids[i].position);
          diff.normalize();
          diff.div(d); // Weight by distance
          steer.add(diff);
          count++; // Keep track of how many
        }
      }
      // Average -- divide by how many
      if (count > 0) {
        steer.div(count);
      }
    
      // As long as the vector is greater than 0
      if (steer.mag() > 0) {
        // Implement Reynolds: Steering = Desired - Velocity
        steer.normalize();
        steer.mult(this.maxspeed);
        steer.sub(this.velocity);
        steer.limit(this.maxforce);
      }
      return steer;
    }
    
    // Alignment
    // For every nearby boid in the system, calculate the average velocity
    align(boids) {
      let neighbordist = 30;
      let sum = createVector(0, 0);
      let count = 0;
      for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);
        if ((d > 0) && (d < neighbordist)) {
          sum.add(boids[i].velocity);
          count++;
        }
      }
      if (count > 0) {
        sum.div(count);
        sum.normalize();
        sum.mult(this.maxspeed);
        let steer = p5.Vector.sub(sum, this.velocity);
        steer.limit(this.maxforce);
        return steer;
      } else {
        return createVector(0, 0);
      }
    }
    
    // Cohesion
    // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
    cohesion(boids) {
      let neighbordist = 20;
      let sum = createVector(0, 0); // Start with empty vector to accumulate all locations
      let count = 0;
      for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);
        if ((d > 0) && (d < neighbordist)) {
          sum.add(boids[i].position); // Add location
          count++;
        }
      }
      if (count > 0) {
        sum.div(count);
        return this.seek(sum); // Steer towards the location
      } else {
        return createVector(0, 0);
      }
    }  
  }