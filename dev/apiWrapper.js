import axios from 'axios';

const apiKey = '978888b30aaa61dd08e71e30dd70f709';
const sessionID = 'random12345567unique';
const botNumber = '78664';


const chatBotLayer = {
  sendMessage(msg) {
    const encodedMsg = encodeURIComponent(msg);
    const url = `https://api.motion.ai/messageBot?bot=${botNumber}&msg=${encodedMsg}&session=${sessionID}&key=${apiKey}`;
    axios.get(url).then(res => res.data.botResponse)
    .catch((err) => {
      console.log(err);
    });
  },
};

export default chatBotLayer;

