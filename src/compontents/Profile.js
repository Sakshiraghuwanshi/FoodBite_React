import React from "react"

class Profile extends React.Component {
    constructor(props){
        super(props);
        //create state
        this.state ={
            userInfo: {
                name: "dummy",
                location: "dummy",
            },
        };
        
    }

   async componentDidMount(){
        //API call
        const data = await fetch(" https://api.github.com/users/sakshiraghuwanshi");
        const json = await data.json();
        this.setState({
            userInfo:json,
           
        });
        console.log(json);
    }

    render()
    {
        return(
          <div>
            <h1> Profile </h1>
            <h2>Name : {this.state.userInfo?.name}</h2>
         <img src= {this.state.userInfo?.avatar_url} />
            <h3>Location: {this.state.userInfo?.location}</h3>
          </div>
        )
    }
}
export default Profile;