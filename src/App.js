import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Folastar Waheed",
        bio: "A passionate software engineer with passion for sports.",
        imgSrc: "https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=600",
        profession: "Software Engineer",
      },
      shows: false,
      mountedTime: new Date(),
      timeInterval: 0,
    };
  }

  componentDidMount() {
    // Track time since the component was mounted
    this.interval = setInterval(() => {
      const currentTime = new Date();
      const elapsedSeconds = Math.floor(
        (currentTime - this.state.mountedTime) / 1000
      );
      this.setState({ timeInterval: elapsedSeconds });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button style={{padding:"10px", color:"white", background:"green"}} onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile" }
        </button>
        {shows && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}
        <p style={{ marginTop: "20px" }}>
          Component has been mounted for: {timeInterval} seconds
        </p>
      </div>
    );
  }
}

export default App;
