function drawLogo(ctx) {
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 400, 400);

    ctx.beginPath();
    const radius = 10;

    const x0 = 350;
    const y0 = 200;
    // ctx.fillStyle = "#3F51B5";
    ctx.fillStyle = "#37474F";
    ctx.arc(x0, y0, radius, 0, Math.PI * 2, false);
    ctx.fill();

    const x1 = 200;
    const y1 = 50;
    ctx.moveTo(x1 + radius, y1);
    ctx.arc(x1, y1, radius, 0, Math.PI * 2, false);
    ctx.fill();

    const x2 = 50;
    const y2 = 200;
    ctx.moveTo(x2 + radius, y2);
    ctx.arc(x2, y2, radius, 0, Math.PI * 2, false);
    ctx.fill();

    const x3 = 200;
    const y3 = 350;
    ctx.moveTo(x3 + radius, y3);
    ctx.arc(x3, y3, radius, 0, Math.PI * 2, false);
    ctx.fill();

    const x4 = 275;
    const y4 = 275;
    ctx.moveTo(x4 + radius, y4);
    ctx.arc(x4, y4, radius, 0, Math.PI * 2, false);
    ctx.fill();

    const x5 = 200;
    const y5 = 200;
    ctx.moveTo(x5 + radius, y5);
    ctx.arc(x5, y5, radius, 0, Math.PI * 2, false);
    ctx.fill();

    // draw lines

    ctx.lineWidth = "10";
    // ctx.strokeStyle = "#3F51B5";
    ctx.strokeStyle = "#37474F";
    ctx.moveTo(x0, y0);
    // ctx.lineTo(x1, y1);
    // ctx.lineTo(x2, y2);
    // ctx.lineTo(x3, y3);
    // ctx.lineTo(x4, y4);
    // ctx.lineTo(x5, y5);
    // ctx.stroke();

    const verts = [
      { x: 350, y: 200 },
      { x: 200, y: 50 },
      { x: 50, y: 200 },
      { x: 200, y: 350 },
      { x: 275, y: 275 },
      { x: 200, y: 200 },
    ];

    let idx = 1;
    const vertices = calcWaypoints();
    drawLine();

    // ctx.translate(x5, y5);
    // var time = new Date();
    // ctx.rotate((Math.PI / 600));
    // ctx.translate(-x5, -y5);

    // window.requestAnimationFrame(draw);

    function drawLine() {
      let requestId;
      if (idx <= vertices.length-1) {
        requestId = requestAnimationFrame(drawLine);

        // ctx.beginPath();
        ctx.moveTo(vertices[idx-1].x, vertices[idx-1].y);
        ctx.lineTo(vertices[idx].x, vertices[idx].y);
        ctx.stroke();
        idx++;
      } else {
        // window.cancelAnimationFrame(requestId);
      }
    }

    function calcWaypoints(){
      let waypoints = [];
      verts.forEach((v, i) => {
        if (i > 0) {
          const dx = v.x - verts[i-1].x;
          const dy = v.y - verts[i-1].y;
          for (let j = 0; j < 50; j++){
              const x = verts[i-1].x + dx*j/50;
              const y = verts[i-1].y + dy*j/50;
              waypoints.push({ x:x, y:y });
          }
        }
      })
      return(waypoints);
    }
}
