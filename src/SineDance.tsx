import { Mafs, Coordinates, Plot, labelPi, useStopwatch, Point } from 'mafs'
import { useEffect, useState } from 'react'

const SineDance = () => {
  const { time, start } = useStopwatch()
  const [xPoint, setXPoint] = useState(0)
  const [isIncreasing, setIsIncreasing] = useState(true)

  useEffect(() => {
    start()
  }, [start])

  // TODO: Fix blinking
  // useEffect(() => {
  //   setXPoint(isIncreasing ? xPoint + time : xPoint - time)
  // }, [time])

  // useEffect(() => {
  //   if (xPoint > 10) {
  //     setIsIncreasing(false)
  //   } else if (xPoint < -10) {
  //     setIsIncreasing(true)
  //   }
  // }, [xPoint])

  const sineFunction = (x: number) => Math.sin(x)

  return (
    <Mafs
      viewBox={{ x: [-Math.PI * 4, Math.PI * 4], y: [-1.5, 1.5] }}
      preserveAspectRatio={false}
    >
      <Coordinates.Cartesian
        subdivisions={4}
        xAxis={{ lines: Math.PI, labels: labelPi }}
      />
      <Plot.OfX y={sineFunction} />
      <Point x={xPoint} y={sineFunction(xPoint)} />
    </Mafs>
  )
}

export default SineDance
