import moment from "moment";

    const items =  [
        {
            "name": "phone",
            "qty": 50,
            "soldDate": moment().subtract(11, 'week').format("MMM DD YYYY")
        },
        {
            "name": "laptop",
            "qty": 20,
            "soldDate": moment().subtract(10, 'week').format("MMM DD YYYY")
        },
        {
            "name": "pc",
            "qty": 30,
            "soldDate": moment().subtract(9, 'week').format("MMM DD YYYY")
        },
        {
            "name": "watch",
            "qty": 7,
            "soldDate": moment().subtract(8, 'week').format("MMM DD YYYY")
        },
        {
            "name": "tv",
            "qty": 15,
            "soldDate": moment().subtract(7, 'week').format("MMM DD YYYY")
        },
        {
            "name": "camera",
            "qty": 5,
            "soldDate":  moment().subtract(6, 'week').format("MMM DD YYYY")
        },
        {
            "name": "printer",
            "qty": 50,
            "soldDate": moment().subtract(5, 'week').format("MMM DD YYYY")
        },
        {
            "name": "screen",
            "qty": 20,
            "soldDate": moment().subtract(4, 'week').format("MMM DD YYYY")
        },
        {
            "name": "ps4",
            "qty": 30,
            "soldDate": moment().subtract(3, 'week').format("MMM DD YYYY")
        },
        {
            "name": "xbox",
            "qty": 3,
            "soldDate": moment().subtract(2, 'week').format("MMM DD YYYY")
        },
        {
            "name": "dvd",
            "qty": 10,
            "soldDate": moment().subtract(1, 'week').format("MMM DD YYYY")
        },
        {
            "name": "keyboards",
            "qty": 40,
            "soldDate": moment().format("MMM DD YYYY")
        }
    ];

export default items;
