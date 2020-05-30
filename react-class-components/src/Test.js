import React, { useState, useEffect } from 'react';

// componentDidMount(){}
/* const Test = props => {

    const [planets, setPlanets] = useState({});

    // Funcion llamada al renderizar el componente
    useEffect(() => {
        // componentDidUnmount()
        console.log("Component Mounted...");
        getPlanets("https://swapi.dev/api/planets/");
    }, []);

    const getPlanets = url => {
        fetch(url, {
            method: 'GET', // GET POST PUT DELETE
            //body: JSON.stringify(data), // POST y PUT
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.status);
            return response.json();
        }).then(data => {
            console.log(data);
            setPlanets(data);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <h1>Test</h1>
    )
}
 */

class Test extends React.Component {
    constructor() {
        super();

        this.state = {
            planets: {},
            vehicles: {},
            people: {}
        }


    }

    componentDidMount() {
        //this.getPlanets("https://swapi.dev/api/planets/");
        this.getData();
    }

    async getPlanets(url) {

        /* fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                planets: data
            })
        }) */

        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            planets: data
        })
    }

    getData = async () => {
        try {
            const response = await Promise.all([
                fetch("https://swapi.dev/api/planets/"),
                fetch("https://swapi.dev/api/vehicles/"),
                fetch("https://swapi.dev/api/people/"),
            ]);

            const data = await Promise.all(
                response.map(resp => resp.json())
            )

            const [planetsData, vehiclesData, peopleData] = data;

            this.setState({
                planets: planetsData,
                vehicles: vehiclesData,
                people: peopleData
            })

        } catch (error) {
            console.log(error);
            return Promise.resolve(null);
        }
    }

    render() {
        return (
            <h1>Class Test</h1>
        )
    }
}

export default Test;