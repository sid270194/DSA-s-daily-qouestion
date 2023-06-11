import { useState } from "react";

const SimpleForm = () => {
  const [profile, setProfile] = useState({
    Ename: "",
    Password: "",
    gender: "",
    city: "",
    hobbi: "",
    rate: "",
  });

  const myChangeFunc = (ev) => {
    const { name, value } = ev.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <p>Name</p>
        <input type="text" onChange={myChangeFunc} name="Ename" />
      </div>
      <div>
        <p>Email</p>
        <input type="text" onChange={myChangeFunc} name="Password" />
      </div>

      <div>
        <p>Gender</p>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={profile.gender === "male"}
          onChange={myChangeFunc}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={profile.gender === "female"}
          onChange={myChangeFunc}
        />
        Female
      </div>

      <div>
        <p>select city</p>
        <select
          name="city"
          id="city"
          value={profile.city}
          onChange={myChangeFunc}>
          <option value="">Select a city</option>
          <option value="pune">pune</option>
          <option value="mumbai">mumbai</option>
          <option value="banglore">banglore</option>
        </select>
      </div>

      <div>
        <p>select hobbies</p>
        <p>Hobbi:</p>
        <label>
          <input
            type="checkbox"
            name="hobbi"
            value="reading"
            checked={profile.hobbi.includes("reading")}
            onChange={myChangeFunc}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbi"
            value="music"
            checked={profile.hobbi.includes("music")}
            onChange={myChangeFunc}
          />
          Music
        </label>
      </div>

      <div>
        <p>Rating</p>
        <input
          type="range"
          name="rating"
          min={1}
          max={10}
          value={profile.rating}
          onChange={myChangeFunc}
        />
      </div>
      <p>---------------------------------------------------------------</p>
      <div>
        <p>{profile.Ename}</p>
        <p>{profile.Password}</p>
        <p>{profile.gender}</p>
        <p>{profile.city}</p>
        <p>{profile.hobbi}</p>
        <p>{profile.rating}</p>
      </div>
    </div>
  );
};

export default SimpleForm;
