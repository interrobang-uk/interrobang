const run = () => {
  const cursor = document.querySelector(".cursor")

  const h = cursor.clientHeight
  const w = cursor.clientWidth

  window.addEventListener("mousemove", e => {
    console.log(e)
    cursor.style.transform = `translateY(${e.pageY - h / 2}px) translateX(${
      e.pageX - w / 2
    }px)`
  })
}

window.addEventListener("DOMContentLoaded", run)
