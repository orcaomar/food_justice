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
      // ⚡ Bolt: Consolidating separate, align, and cohesion into a single iteration loop
      // within the flock method optimizes performance by reducing array traversals
      // from O(3N^2) to O(N^2) per frame.

      let desiredseparation = 25.0;
      let neighbordistAli = 30.0;
      let neighbordistCoh = 20.0;

      let sepSteer = createVector(0, 0);
      let aliSum = createVector(0, 0);
      let cohSum = createVector(0, 0);

      let sepCount = 0;
      let aliCount = 0;
      let cohCount = 0;

      for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);

        if (d > 0) {
          // Separation
          if (d < desiredseparation) {
            let diff = p5.Vector.sub(this.position, boids[i].position);
            diff.normalize();
            diff.div(d);
            sepSteer.add(diff);
            sepCount++;
          }

          // Alignment
          if (d < neighbordistAli) {
            aliSum.add(boids[i].velocity);
            aliCount++;
          }

          // Cohesion
          if (d < neighbordistCoh) {
            cohSum.add(boids[i].position);
            cohCount++;
          }
        }
      }

      // Calculate Separation Steer
      if (sepCount > 0) {
        sepSteer.div(sepCount);
      }
      if (sepSteer.mag() > 0) {
        sepSteer.normalize();
        sepSteer.mult(this.maxspeed);
        sepSteer.sub(this.velocity);
        sepSteer.limit(this.maxforce);
      }

      // Calculate Alignment Steer
      let aliSteer = createVector(0, 0);
      if (aliCount > 0) {
        aliSum.div(aliCount);
        aliSum.normalize();
        aliSum.mult(this.maxspeed);
        aliSteer = p5.Vector.sub(aliSum, this.velocity);
        aliSteer.limit(this.maxforce);
      }

      // Calculate Cohesion Steer
      let cohSteer = createVector(0, 0);
      if (cohCount > 0) {
        cohSum.div(cohCount);
        cohSteer = this.seek(cohSum);
      }

      // Arbitrarily weight these forces
      sepSteer.mult(2.5);
      aliSteer.mult(1.0);
      cohSteer.mult(1.0);

      // Add the force vectors to acceleration
      this.applyForce(sepSteer);
      this.applyForce(aliSteer);
      this.applyForce(cohSteer);
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
    
  }