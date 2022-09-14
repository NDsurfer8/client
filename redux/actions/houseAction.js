export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () => {
    return async dispatch => {
        // add logic to fetch api houses FETCHING FROM OUR GET ALL API FROM SERVER TO GET HOUSES FROM DATABASE
        const result = await fetch('http://localhost:3000/api/houses/');

        const resultData = await result.json();

        // console.log(resultData)

        dispatch({
            type: FETCH_HOUSES,
            payload: resultData
        })
    }
}

export const createHome = ({title, image, homeType, description, price, yearBuilt, address}) => {

    return async dispatch => {
        const response = await fetch('http://localhost:3000/api/houses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                image,
                homeType,
                price,
                yearBuilt,
                address,
                description
            })
        })
        const responseData = await response.json();
        // console.log(responseData)
        dispatch({
            type: CREATE_HOUSES,
            payload: responseData
        })
    }
}