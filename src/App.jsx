import Card from './Card'
function App() {


  return (
    <div className="sm:flex sm:justify-center sm:items-center sm:w-full  sm:h-screen ">
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
        <Card color="reactionRed" imgName="icon-reaction.svg" cardName="Reaction" cardValue="80 / 100"/>
        <Card color="memoryYellow" imgName="icon-memory.svg" cardName="Memory" cardValue="92 / 100"/>
        <Card color="verbalGreen" imgName="icon-verbal.svg" cardName="Verbal" cardValue="61 / 100"/>
        <Card color="visualBlue" imgName="icon-visual.svg" cardName="Visual" cardValue="72 / 100"/>
        <button className="bg-slate-700 text-white rounded-3xl py-3 font-bold sm:mt-8 sm:w-full">Contintue</button>
      </div>
    </div>
  </div>
  )
}

export default App
