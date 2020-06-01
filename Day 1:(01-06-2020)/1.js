// 1. Convert specifications given below in image to Javascript Object;

//Creating TechnicalSpecification as Javascript Object to store given data in the image.

var TechnicalSpecification = {
    Dimensions:{
        OverallLength:3500,
        OverallWidth:1600,
        OverallHeigth:1490,
        WheelBase:2360,
        TrackWidth:{Front:1405,Rear:1400},
        MinimumTurningRadius:4.5,
        MinimumGroungClearance:170
    },
    Capacities:{
        SeatingCapacity:5,
        FuelTankCapacity:35
    },
    Engine:{
        Type:"KB-Series",
        NumberOfCylinders:3,
        NumberOfValves:12,
        Capacity:998,
        BoreScroke:"73.0 X 79.5",
        CompressionRatio:"10:1",
        MaximumPower:"67/6200",
        MaximumTorQue:"90/3500",
        FuelDistribution:"Multipoint Injection"
    },
    Transmission:{Type:"5-speed MT"},
    Chassls:{
        Steering:"Rack & Pinion, Power assisted",
        Brakes:{Front:"Ventilated discs",Rear:"Drums"},
        Suspension:{
            Front:"MacPherson strut & coil spring",
            Rear:"Isolated trailing link & coil spring"
            
        },
        ShockAbsorbers:"Gas filled",
        TypeTubeLess:"155/80R13"
    },
    Weights:{
        KerbWeight:"860-880",
        GrossVehicleWeight:1320
    }
};
