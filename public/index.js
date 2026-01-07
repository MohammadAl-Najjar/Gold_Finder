const es = new EventSource('/api/gold')

es.onmessage = (e) => {
  console.log(JSON.parse(e.data))
}