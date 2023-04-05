import Card from './Card'
import memoryImg from './assets/images/icon-memory.svg'
import reactionImg from './assets/images/icon-reaction.svg'
import verbalImg from './assets/images/icon-verbal.svg'
import visualImg from './assets/images/icon-visual.svg'

function App() {


  return (
    <div className="sm:flex sm:justify-center sm:items-center sm:w-full sm:h-screen">
    <div className="sm:flex sm:w-[750px] sm:h-[520px] sm:shadow-xl sm:rounded-[3rem]">
      <div className="h-[356px] sm:h-full text-white w-full sm:w-[364px] flex justify-evenly items-center flex-col rounded-b-[3rem] sm:rounded-[3rem] bg-gradient-to-b from-mainBg1 to-mainBg2">
          <p className="text-xl opacity-60">Your Result</p>
          <div className="h-36 w-36 flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-circleBg1 to-circleBg2">
              <p className="text-6xl">76</p>
              <p className="opacity-60">of 100</p>
          </div>
          <p className="font-bold text-2xl">Great</p>
          <p className="px-12 text-center opacity-60">You Scored Higher than 65% of the people who have taken these tests</p>
      </div>
      <div className="p-7 text-l flex flex-col sm:items-center sm:justify-center gap-4 sm:w-[370px]">
        <p className="mb-5 font-bold">Summary</p>
        <Card bgClass="bg-reactionRed/[0.1]" textClass="text-reactionRed" imgUrl={reactionImg} cardName="Reaction" cardValue="80"/>
        <Card bgClass="bg-memoryYellow/[0.1]" textClass="text-memoryYellow" imgUrl={memoryImg} cardName="Memory" cardValue="92"/>
        <Card bgClass="bg-verbalGreen/[0.1]" textClass="text-verbalGreen" imgUrl={verbalImg} cardName="Verbal" cardValue="61"/>
        <Card bgClass="bg-visualBlue/[0.1]" textClass="text-visualBlue" imgUrl={visualImg} cardName="Visual" cardValue="72"/>
        <button className="bg-slate-700 text-white rounded-3xl py-3 font-bold sm:mt-8 sm:w-full active:bg-mainBg2">Contintue</button>
      </div>
    </div>
  </div>
  )
}

export default App
