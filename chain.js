class Chain{
	constructor(bodyA,pointB)
	{
		
		
		var options={
			
			bodyA:bodyA,
			pointB:pointB,
			stiffness:1.2,
            length:250,
			
		}
		//console.log(options);
        this.pointB=pointB;
		this.chain=Constraint.create(options)
		World.add(world,this.chain)
	}

	display()
	{
		var endpoint=this.chain.bodyA.position;
		var startpoint=this.chain.pointB;
push()
stroke("brown")
		strokeWeight(2);

		// line (x1,y1, x2,y2)

		line(startpoint.x,startpoint.y,endpoint.x,endpoint.y);

        
        pop();
	}

}
