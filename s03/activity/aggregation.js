let collections = `[

    // Employee Collection
    /* 1 */
    {
        "_id": ObjectId("632b0dfa3036a3bec9f00d0e"),
        "id": "312456",
        "employeeName": "Joongki Song",
        "employeeAge": 28,
        "jobRole": "Store Manager",
        "salary": 120000
    },

    /* 2 */
    {
        "_id": ObjectId("632b0e453036a3bec9f00d37"),
        "id": "345342",
        "employeeName": "Joongkuk Jeon",
        "employeeAge": 25,
        "jobRole": "Store Associate",
        "salary": 45000
    },

    /* 3 */
    {
        "_id": ObjectId("632b0e6b3036a3bec9f00d45"),
        "id": "334566",
        "employeeName": "Jin Kim",
        "employeeAge": 35,
        "jobRole": "Cashier",
        "salary": 67500
    },

    /* 4 */
    {
        "_id": ObjectId("632b0f2f3036a3bec9f00d69"),
        "id": "245345",
        "name": "Kim Jong-un",
        "age": 40,
        "jobRole": "Senior Cashier",
        "salary": "72500"
    },


    /* 5 */
    {
        "_id": ObjectId("632b0f513036a3bec9f00d6e"),
        "id": "445364",
        "name": "Squid Game",
        "age": 22,
        "jobRole": "Store Associate",
        "salary": "35000"
    }























    


    // Inventory 

        /* 1 */
    {
        "_id" : ObjectId("632b0fa13036a3bec9f00dab"),
        "id" : "LS0000123",
        "name" : "XYZ Chocolate Bar - 100g",
        "price" : "5.23",
        "quantity" : "25000",
        "category" : [ 
            "chocolates", 
            "sweets"
        ]
    },

    /* 2 */
    {
        "_id" : ObjectId("632b0fb63036a3bec9f00dba"),
        "id" : "LS0003123",
        "name" : "Milk Non-fat - 1lt",
        "price" : "3",
        "quantity" : "1000",
        "category" : [ 
            "dairy", 
            "healthy"
        ]
    },

    /* 3 */
    {
        "_id" : ObjectId("632b0fc83036a3bec9f00dbd"),
        "id" : "LS0004566",
        "name" : "Eggs - 12 Pack",
        "price" : "6",
        "quantity" : "5000",
        "category" : [ 
            "poultry", 
            "generic"
        ]
    },

    /* 4 */
    {
        "_id" : ObjectId("632b0fe43036a3bec9f00dcb"),
        "id" : "LS0008542",
        "name" : "Whole Chicken",
        "price" : "12.59",
        "quantity" : "1250",
        "category" : [ 
            "poultry", 
            "meat"
        ]
    },

    /* 5 */
    {
        "_id" : ObjectId("632b0ffb3036a3bec9f00dd7"),
        "id" : "LS0008542",
        "name" : "Carrots (Packed) - 250g",
        "price" : "3.50",
        "quantity" : "3000",
        "category" : [ 
            "vegetables", 
            "healthy", 
            "organic"
        ]
    },

    /* 6 */
    {
        "_id" : ObjectId("632b10133036a3bec9f00de7"),
        "id" : "LS0009846",
        "name" : "Beans (Packed) - 250g",
        "price" : "6.75",
        "quantity" : "6000",
        "category" : [ 
            "vegetables", 
            "healthy", 
            "organic"
        ]
    },

    /* 7 */
    {
        "_id" : ObjectId("632b10223036a3bec9f00dec"),
        "id" : "LS0009100",
        "name" : "Bell Pepper (Packed) - 250 g",
        "price" : "4.95",
        "quantity" : "12000",
        "category" : [ 
            "vegetables", 
            "healthy", 
            "organic"
        ]
    },

    /* 8 */
    {
        "_id" : ObjectId("632b103e3036a3bec9f00dfa"),
        "id" : "LS0002688",
        "name" : "ZZ Butter - 500 g",
        "price" : "25",
        "quantity" : "500",
        "category" : [ 
            "dairy", 
            "healthy", 
            "premium"
        ]
    },







    // PAYMENTS 
        /* 1 */
    {
        "_id" : ObjectId("632b10543036a3bec9f00e0b"),
        "id" : "BL2021005",
        "grossAmount" : "105.65",
        "discounts" : "10",
        "netAmount" : "95.65",
        "date/time" : "ISODate(2021-01-01T16:00:00Z)"
    },

    /* 2 */
    {
        "_id" : ObjectId("632b10793036a3bec9f00e10"),
        "id" : "BL2021007",
        "grossAmount" : "153.33",
        "discounts" : "20.33",
        "netAmount" : "133",
        "date/time" : "ISODate(2021-01-01T16:31:08Z)"
    },

    /* 3 */
    {
        "_id" : ObjectId("632b10923036a3bec9f00e1e"),
        "id" : "BL2021008",
        "grossAmount" : "21",
        "discounts" : "0",
        "netAmount" : "21",
        "date/time" : "ISODate(2021-01-01T20:25:52Z)"
    },

    /* 4 */
    {
        "_id" : ObjectId("632b10a23036a3bec9f00e2c"),
        "id" : "BL2021009",
        "grossAmount" : "89.72",
        "discounts" : "0.72",
        "netAmount" : "89",
        "date/time" : "ISODate(2021-01-01T08:45:12Z)"
    },

    /* 5 */
    {
        "_id" : ObjectId("632b10c13036a3bec9f00e33"),
        "id" : "BL2021010",
        "grossAmount" : "33.5",
        "discounts" : "20.5",
        "netAmount" : "13",
        "date/time" : "(2021-01-01T11:02:35Z)"
    },
























        // PROMOS
        /* 1 */
    {
        "_id" : ObjectId("632b10f73036a3bec9f00e45"),
        "id" : "PROMO01",
        "name" : "Sales Promo",
        "period" : "7",
        "dailySales" : [ 
            20, 
            50, 
            12, 
            30, 
            45, 
            15, 
            60
        ]
    },

    /* 2 */
    {
        "_id" : ObjectId("632b11263036a3bec9f00e5e"),
        "id" : "PROMO02",
        "name" : "Milk Promo",
        "period" : "2",
        "dailySales" : [ 
            120, 
            200
        ]
    },

    /* 3 */
    {
        "_id" : ObjectId("632b113d3036a3bec9f00e72"),
        "id" : "PROMO03",
        "name" : "Meat Promo",
        "period" : "3",
        "dailySales" : [ 
            101, 
            205
        ]
    },

    /* 4 */
    {
        "_id" : ObjectId("632b11563036a3bec9f00e79"),
        "id" : "PROMO04",
        "name" : "New Year Promo",
        "period" : "7",
        "dailySales" : [ 
            68, 
            88, 
            105, 
            188, 
            74, 
            278, 
            350
        ]
    },


]`