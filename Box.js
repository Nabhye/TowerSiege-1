class Box{
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            'restitution':0.8,
            'friction': 1.0,
            'density': 1.0,
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,heigth,options);
        World.add(world, this.body);
    }
};