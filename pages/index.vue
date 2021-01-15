<template>
  <div>
    <h1>Day 2 - Clock</h1>
    <h2>{{ city }}, {{ province }}</h2>
    <h2>{{country}} {{flag}}</h2>
    <div class="clock">
      <div class="container">
        <div class="hour"></div>
        <div>hours</div>
      </div>
      <div class="container">
        <div class="minutes"></div>
        <div>minutes</div>
      </div>
      <div class="container">
        <div class="seconds"></div>
        <div>seconds</div>
      </div>
      <div class="phase-container">
        <div class="phase"></div>
      </div>
    </div>
  </div>
</template>

<script>
function clock() {
  var hours = document.querySelector(".hour");
  var minutes = document.querySelector(".minutes");
  var seconds = document.querySelector(".seconds");
  var phase = document.querySelector(".phase");

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var am = "AM";

  if (h > 12) {
    h = h - 12;
    var am = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  phase.innerHTML = am;
}

var interval = setInterval(clock, 1000);

export default {
  components: {},
  data() {
    return {
      city: "",
      country: "",
      province: "",
      flag:""
    };
  },
  async mounted() {
    await fetch(
      "https://api.ipdata.co/?api-key=1fea32ceddf32d0b6b02368d167292ae9974950134c6613bdeb737d6"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.city = data.city;
        this.country = data.country_name;
        this.province = data.region;
        this.flag = data.emoji_flag
      });
  },
};
</script>
<style>
h1 {
  font-size: 50px;
  font-weight: 300;
}
h1,h2{
  color: #858AE3;
}
h2 {
  font-size: 25px;
  font-weight: 500;
}
.clock {
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0;
}
.container,
.phase-container {
  width: 20%;
  background: #858AE3;
  text-transform: uppercase;
  margin: 0;
  padding: 10px 0;
  box-shadow: 0px 8px 12px -8px black;
  border-radius: 20px;
  cursor: pointer;
}
.phase-container {
  height: fit-content;
  margin-top: auto;
}
.container:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
}

.hour,
.minutes,
.seconds {
  font-size: 70px;
}
.phase {
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 500px) {
  .container {
    width: 23%;
  }
  .hour,
  .minutes,
  .seconds {
    font-size: 50px;
  }
  .phase {
    font-size: 30px;
  }
  .clock{
    justify-content: space-between;
  }
}
</style>