import fs from "fs";
import Axios from "axios";

const imageurl =
  "https://www.mvshospital.com/wp-content/uploads/revslider/homepage/cat.png";

function createFolder() {
  const folderName = "__assets";
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }
}

async function downloadImage(url, filepath) {
  await Axios({
    url,
    method: "GET",
    responseType: "stream",
  })
    .then((response) => {
      response.data.pipe(fs.createWriteStream(filepath));
    })
    .catch((error) => {
      console.log(error);
    });
}

createFolder();
downloadImage(imageurl, "./__assets/new.jpg");
