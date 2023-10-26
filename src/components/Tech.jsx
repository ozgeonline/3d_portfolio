import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {technologies.map((technology) => (
        <div className="w-[86px] h-[86px]" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
