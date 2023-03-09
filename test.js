import axios from "axios";

let length = 0;
await axios
  .get("http://localhost:4000/api/post/")
  .then((res) => {
    // console.log(res.data);
    length = res.data.length;
  })
  .catch((err) => console.log(err));

await axios
  .post("http://localhost:4000/api/post/", {
    title: "something",
    body: "something",
  })
  .then((res) => {
    // console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
    throw "no pude hacer el post";
  });

let idToDelete = "";

await axios
  .get("http://localhost:4000/api/post/")
  .then((res) => {
    // console.log(res.data);
    if (res.data.length == length + 1) {
      console.log("GENIAL SALIO TODO BIEN PUDE CHEQUEAR EL POST EN EL ARRAY");
      length++;
      idToDelete = res.data[0].id;
      console.log("idtoelete", idToDelete);
    } else {
      console.log(
        "todo mal el get me informa que no se agrego el post en el paso anterior"
      );
      throw "get no funciona";
    }
  })
  .catch((err) => console.log(err));

await axios
  .delete("http://localhost:4000/api/post/" + idToDelete)
  .then(() => console.log("borre el primero"))
  .catch(() => {
    console.log("no pude borrar");
    throw "error al intentar borrar";
  });

await axios
  .get("http://localhost:4000/api/post/")
  .then((res) => {
    const checkDeleted = res.data.find((item) => item.id == idToDelete);
    // console.log(res.data);
    console.log("lo elimino bien!!! " + idToDelete);
  })
  .catch((err) => console.log(err));
