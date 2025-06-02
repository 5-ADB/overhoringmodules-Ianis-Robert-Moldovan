function Huisdier(soort, naam, leeftijd) {
  return {
    print: `mijn ${soort} ${naam} is ${leeftijd} jaar oud`
  };
}

module.exports = { Huisdier }
