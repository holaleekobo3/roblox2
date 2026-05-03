async function run() {
  const res = await fetch("https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=Zw_HE1mQ7rA&format=json");
  const data = await res.json();
  console.log(data);
}
run();
