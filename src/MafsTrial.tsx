import { Mafs, Coordinates, Plot, labelPi, useMovablePoint } from 'mafs'

interface MafsTrialProps {
  isPlotMoving: boolean
}

const MafsTrial = ({ isPlotMoving }: MafsTrialProps) => {
  const movablePoint = useMovablePoint([0, 0], {
    constrain: ([x, y]) => [x, isPlotMoving ? 0 : Math.sin(x)],
  })
  const plotFunction = (x: number) =>
    isPlotMoving ? Math.sin(x - movablePoint.x) : Math.sin(x)
  return (
    <Mafs
      viewBox={{ x: [-Math.PI * 4, Math.PI * 4], y: [-1.5, 1.5] }}
      preserveAspectRatio={false}
    >
      <Coordinates.Cartesian
        subdivisions={4}
        xAxis={{ lines: Math.PI, labels: labelPi }}
      />
      <Plot.OfX y={plotFunction} />
      {movablePoint.element}
    </Mafs>
  )
}

export default MafsTrial
