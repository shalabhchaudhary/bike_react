import React from "react";
import BikeListingScreen from "../screens/BikeListingScreen";
import Api from "../services/Api";

const MockGetData = 
    {
        "network": {
            "company": [
            "ЗАО «СитиБайк»"
            ],
            "href": "/v2/networks/velobike-moscow",
            "id": "velobike-moscow",
            "location": {
            "city": "Moscow",
            "country": "RU",
            "latitude": 55.75,
            "longitude": 37.616667
            },
            "name": "Velobike",
            "stations": [
                {
                    "empty_slots": 6,
                    "extra": {
                      "address": "ст. м. Кропоткинская (выход к Гоголевскому бульвару)",
                      "ebikes": 3,
                      "electric_free": 0,
                      "electric_slots": 0,
                      "normal_bikes": 3,
                      "normal_free": 6,
                      "normal_slots": 12,
                      "slots": 12,
                      "uid": "0001"
                    },
                    "free_bikes": 6,
                    "id": "c8a5761ea95e927808b2f37fd65a00f6",
                    "latitude": 55.7449006,
                    "longitude": 37.6020183,
                    "name": "ст. м. Кропоткинская (выход к Гоголевскому бульвару)",
                    "timestamp": "2022-08-01T03:46:32.182000Z"
                  }
            ]
            }
    };

it('Api test case', async function() {
    global.fetch = jest.fn().mockImplementation(() =>{
        var p  = new Promise((resolve, reject) => {
            resolve({
                json: function(){
                    return MockGetData;
                }
            })
        })
        return p;
    })

    const response = await Api.fecthBikeList();

    expect(response).toBe(MockGetData)
})


