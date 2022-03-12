const getUniformTipps = (totalTipps, workers) => {
    let result = [];
    const spulerTipps = Math.round(totalTipps / 10);
    const hours = workers.map((worker) => worker.hour);
    const totalHours = hours.reduce((acc, val) => {
      return (acc += val);
    }, 0);
    const tippsPerHours = (totalTipps - spulerTipps) / totalHours;
    result = workers.map((worker) =>
      worker.type === "spüler"
        ? (worker.tipps = spulerTipps)
        : (worker.tipps = Math.round(tippsPerHours * worker.hour))
    );
    return result;
  };
  
  console.log(
    getUniformTipps(100, [
      { name: "giacomo", hour: 2, type: "service" },
      { name: "sergio", hour: 4, type: "service" },
      { name: "daniela", hour: 4, type: "service" },
      { name: "pipi", hour: 0, type: "spüler" },
    ])
  );
  