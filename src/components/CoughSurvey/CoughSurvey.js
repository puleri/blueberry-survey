import React, { useState, useEffect } from 'react';
import './CoughSurvey.css'

export default function CoughSurvey() {

  // Every survey starts with these three questions, in this order. Do not modify this.
  const DEFAULT_QUESTIONS = ['cough_sentence', 'cough_blue', 'cough_length']

  // All questions the app might ever ask. Do not modify this.
  const ALL_QUESTIONS = {
    'cough_sentence': {
      'wording': 'Is your child able to finish a sentence without needing a breath?',
      'if_yes_ask':[],
      'if_no_ask':[],
    },
    'cough_blue': {
      'wording': 'Are your child\'s lips or face turning blue?',
      'if_yes_ask':[],
      'if_no_ask':[],
    },
    'cough_length': {
      'wording': 'Has your child had a cough for more than 3 days?',
      'if_yes_ask':['cough_worsening', 'cough_ribs_pulling'],
      'if_no_ask':['cough_wheezing']
    },
    'cough_ribs_pulling': {
      'wording': 'When your child breathes, is the skin around their ribs pulling in with each breath and outlining their ribs?',
      'if_yes_ask':['cough_pain'],
      'if_no_ask':[],
    },
    'cough_pain': {
      'wording': 'Does your child have pain when trying to take a breath?',
      'if_yes_ask':['cough_ingest'],
      'if_no_ask':[],
    },
    'cough_wheezing': {
      'wording': 'Is your child\'s breathing between coughs noisy?',
      'if_yes_ask':['cough_ingest'],
      'if_no_ask':[],
    },
    'cough_worsening': {
      'wording': 'Since your child\'s cough started, has it been getting worse?',
      'if_yes_ask':[],
      'if_no_ask':[],
    },
    'cough_ingest': {
      'wording': 'Did the cough start after your child choked on something, even if it was a very minor incident?',
      'if_yes_ask':[],
      'if_no_ask':[],
    }
  }

  const [survey, setSurvey] = useState({
    cough_sentence: false,
    cough_blue: false,
    cough_length: false,
    cough_ribs_pulling: false,
    cough_pain: false,
    cough_wheezing: false,
    cough_worsening: false,
    cough_ingest: false,
  })

  const [question, setQuestion] = useState('cough_sentence')

  const handleFinishBack = () => {
    if (!survey.cough_ribs_pulling) {
      setQuestion('cough_ribs_pulling')
    }
    else if (!survey.cough_pain) {
      setQuestion('cough_pain')
    }
    else if (!survey.cough_wheezing) {
      setQuestion('cough_wheezing')
    }
    else {
      setQuestion('cough_ingest')
    }
  }



  switch (question) {
    default:
      return (
        <div className="question-container">
          <div id="question">
          <h1>{ALL_QUESTIONS.cough_sentence.wording}</h1>
          </div>
          <button onClick={() => {
            setSurvey({ ...survey, cough_sentence: true})
            setQuestion('cough_blue')
          }} id="yesButton">Yes</button>
          <button onClick={() => {
            setSurvey({ ...survey, cough_sentence: false})
            setQuestion('cough_blue')
          }}id="noButton">No</button>
        </div>
      )
    case 'cough_blue':
      return (
        <div className="question-container">
          <div id="question">
          <h1>{ALL_QUESTIONS.cough_blue.wording}</h1>
          </div>
          <button onClick={() => {
            setSurvey({...survey, cough_blue: true})
            setQuestion('cough_length')
          }} id="yesButton">Yes</button>
          <button onClick={() => {
            setSurvey({...survey, cough_blue: false})
            setQuestion('cough_length')
          }}id="noButton">No</button>
        </div>
      )
    case 'cough_length':
    return (
      <div className="question-container">
        <button onClick={()=>setQuestion('cough_blue')} id="back"><i class="fas fa-arrow-alt-circle-left"></i></button>
        <div id="question">
        <h1>{ALL_QUESTIONS.cough_length.wording}</h1>
        </div>
        <button onClick={() => {
          setSurvey({...survey, cough_length: true})
          setQuestion('cough_worsening')
      }} id="yesButton">Yes</button>
        <button onClick={() => {
          setSurvey({...survey, cough_length: false})
          setQuestion('cough_wheezing')
      }}id="noButton">No</button>
      </div>
    )
    case 'cough_worsening':
    return (
      <div className="question-container">
        <button onClick={()=>setQuestion('cough_length')} id="back"><i class="fas fa-arrow-alt-circle-left"></i></button>
        <div id="question">
        <h1>{ALL_QUESTIONS.cough_worsening.wording}</h1>
        </div>
        <button onClick={() => {
          setSurvey({...survey, cough_worsening: true})
          setQuestion('cough_ribs_pulling')
      }} id="yesButton">Yes</button>
        <button onClick={() => {
          setSurvey({...survey, cough_worsening: false})
          setQuestion('cough_ribs_pulling')
      }}id="noButton">No</button>
      </div>
    )
    case 'cough_ribs_pulling':
    return (
      <div className="question-container">
        <button onClick={()=>setQuestion('cough_worsening')} id="back"><i class="fas fa-arrow-alt-circle-left"></i></button>
        <div id="question">
        <h1>{ALL_QUESTIONS.cough_ribs_pulling.wording}</h1>
        </div>
        <button onClick={() => {
          setSurvey({...survey, cough_ribs_pulling: true})
          setQuestion('cough_pain')
      }} id="yesButton">Yes</button>
        <button onClick={() => {
          setSurvey({...survey, cough_ribs_pulling: false})
          setQuestion('finished')
      }}id="noButton">No</button>
      </div>
    )
    case 'cough_pain':
    return (
      <div className="question-container">
        <button onClick={()=>setQuestion('cough_ribs_pulling')} id="back"><i class="fas fa-arrow-alt-circle-left"></i></button>
        <div id="question">
        <h1>{ALL_QUESTIONS.cough_pain.wording}</h1>
        </div>
        <button onClick={() => {
          setSurvey({...survey, cough_pain: true})
          setQuestion('finished')
      }} id="yesButton">Yes</button>
        <button onClick={() => {
          setSurvey({...survey, cough_pain: false})
          setQuestion('finished')
      }}id="noButton">No</button>
      </div>
    )
    case 'cough_wheezing':
    return (
      <div className="question-container">
        <button onClick={()=>setQuestion('cough_length')} id="back"><i class="fas fa-arrow-alt-circle-left"></i></button>
        <div id="question">
        <h1>{ALL_QUESTIONS.cough_wheezing.wording}</h1>
        </div>
        <button onClick={() => {
          setSurvey({...survey, cough_wheezing: true})
          setQuestion('cough_ingest')
        }} id="yesButton">Yes</button>
        <button onClick={() => {
          setSurvey({...survey, cough_wheezing: false})
          setQuestion('finished')
      }}id="noButton">No</button>
      </div>
    )
    case 'cough_ingest':
    return (
      <div className="question-container">
      <button onClick={()=>setQuestion('cough_wheezing')} id="back"><i class="fas fa-arrow-alt-circle-left"></i></button>
        <div id="question">
        <h1>{ALL_QUESTIONS.cough_ingest.wording}</h1>
        </div>
        <button onClick={() => {
          setSurvey({...survey, cough_ingest: true})
          setQuestion('finished')
      }} id="yesButton">Yes</button>
        <button onClick={() => {
          setSurvey({...survey, cough_ingest: false})
          setQuestion('finished')
      }}id="noButton">No</button>
      </div>
    )
    case 'finished':
    return (
      <div className="question-container">
        <h1>Finished</h1>
        <button onClick={()=>handleFinishBack()} id="back"><i class="fas fa-arrow-alt-circle-left"></i></button>
        <button onClick={()=>console.log("survey data:", survey)} id="yesButton">Log</button>
      </div>
    )
  }
}
