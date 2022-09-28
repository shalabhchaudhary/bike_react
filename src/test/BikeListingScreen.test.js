import React from "react";
import BikeListingScreen from "../screens/BikeListingScreen";
import Api from "../services/Api";

const MockGetData = 
    {
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
        "name": "Velobike"
    };

const MockPosList = [MockGetData];

it('Api test case', async function() {
    global.fetch = jest.fn().mockImplementation(() =>{
        var p  = new Promise((resolve, reject) => {
            resolve({
                json: function(){
                    return MockPosList;
                }
            })
        })
        return p;
    })

    const response = await Api.fecthBikeList();

    expect(response).toBe(MockPosList)
})

// describe('BikeListScreen',() =>{
//     let component = BikeListingScreen;
//     let fixture = ComponentFixture<BikeListingScreen>

//     beforeEach(async () =>{
//         await TestBed.configureTestingModule({
//             declarations:[BikeListingScreen],
//             schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
//             imports:[],
//             providers:[]
//         })
//     }).compileComponents();
// });

// beforeEach(() =>{
//     fixture = TestBed.createComponent(BikeListingScreen);
//     component = fixture.componentInstance;
// });

// it('should create', ()=>{
//     expect(component).toBeTruthy();
// });

