function HowToPlay() {
  return (
    <div className="page">
      <div className="content-page">
        <h1>How to Play</h1>
        <p className="subtitle">Everything you need to master Qross</p>

        <nav className="toc">
          <h2>Contents</h2>
          <ol>
            <li><a href="#grid">The Grid</a></li>
            <li><a href="#starting">Starting a Game</a></li>
            <li><a href="#corner">Picking Your Corner</a></li>
            <li><a href="#movement">Movement</a></li>
            <li><a href="#answering">Answering Questions</a></li>
            <li><a href="#hints">Hints</a></li>
            <li><a href="#scoring">Scoring</a></li>
            <li><a href="#variants">Variants</a></li>
            <li><a href="#tips">Tips & Strategy</a></li>
          </ol>
        </nav>

        <div id="grid" className="section">
          <h2>The Grid</h2>
          <p>
            The board is a square grid of colored cells. Each cell holds a trivia question
            from a topic, and each topic has its own color. The colors help you plan your
            route through subjects you know well.
          </p>
          <p>Board sizes range from 4x4 (16 cells) to 8x8 (64 cells).</p>
        </div>

        <div id="starting" className="section">
          <h2>Starting a Game</h2>
          <p>From the home screen, configure your game:</p>
          <ol>
            <li><strong>Board Size</strong> — Choose from 4x4 to 8x8. Larger boards are harder but offer more routing options.</li>
            <li><strong>Variant</strong> — Face Up, Face Down, or Blind.</li>
            <li><strong>Topics</strong> — Scroll the topic pills and tap to select. At least 1 topic is required.</li>
            <li><strong>Play</strong> — Tap Play to generate your board.</li>
          </ol>
        </div>

        <div id="corner" className="section">
          <h2>Picking Your Corner</h2>
          <p>
            When the board appears, all <strong>4 corners</strong> glow. This is your first
            strategic decision — survey the board, then tap the corner where you want to start.
          </p>
          <p>
            Answer the corner's question correctly to lock in your starting position.
            The diagonally opposite corner automatically becomes your goal.
          </p>
          <table>
            <thead>
              <tr><th>You Pick</th><th>Your Goal</th></tr>
            </thead>
            <tbody>
              <tr><td>Top-left</td><td>Bottom-right</td></tr>
              <tr><td>Top-right</td><td>Bottom-left</td></tr>
              <tr><td>Bottom-left</td><td>Top-right</td></tr>
              <tr><td>Bottom-right</td><td>Top-left</td></tr>
            </tbody>
          </table>
          <div className="tip">
            <p><strong>Tip:</strong> Choose the corner surrounded by topics you're strongest in.</p>
          </div>
        </div>

        <div id="movement" className="section">
          <h2>Movement</h2>
          <p>
            Movement uses <strong>8-direction adjacency</strong> — you can move to any of the
            8 cells surrounding your current position (up, down, left, right, and all 4 diagonals).
          </p>
          <ul>
            <li>Correct answers advance your position and extend the path.</li>
            <li>Wrong answers <strong>burn</strong> the cell (permanently blocked) and cost a life.</li>
            <li>Your position stays at the last successful cell after a wrong answer.</li>
          </ul>
        </div>

        <div id="answering" className="section">
          <h2>Answering Questions</h2>
          <p>
            Tap an available (pulsing) cell to reveal its question. You'll see the topic badge,
            difficulty indicator, 4 answer choices, and optional hint buttons.
          </p>
          <p>
            <strong>Win</strong> by answering the goal corner correctly.
            <strong> Lose</strong> by exceeding wrong answer limits or getting stuck with no available moves.
          </p>
          <table>
            <thead>
              <tr><th>Board</th><th>Max Wrong</th></tr>
            </thead>
            <tbody>
              <tr><td>4x4</td><td>2</td></tr>
              <tr><td>5x5</td><td>3</td></tr>
              <tr><td>6x6</td><td>4</td></tr>
              <tr><td>7x7</td><td>5</td></tr>
              <tr><td>8x8</td><td>6</td></tr>
            </tbody>
          </table>
        </div>

        <div id="hints" className="section">
          <h2>Hints</h2>
          <p>Two hint types are available during any question:</p>
          <h3>Show Hint (+1)</h3>
          <p>
            Reveals a text clue below the question. Costs 1 point added to your score.
            Available only if the question has a hint.
          </p>
          <h3>Eliminate (+2)</h3>
          <p>
            Removes one wrong answer choice from the options. Costs 2 points per use.
            Can be used multiple times as long as 2+ wrong choices remain.
          </p>
          <div className="tip">
            <p><strong>Tip:</strong> A +1 hint on a must-win cell is worth the penalty. Burning a critical-path cell costs much more.</p>
          </div>
        </div>

        <div id="scoring" className="section">
          <h2>Scoring</h2>
          <code className="code-block">Score = moves + (wrong x 2) + hintPenalty</code>
          <p>Lower is better. The minimum possible score equals the board size (a perfect diagonal).</p>
          <table>
            <thead>
              <tr><th>Rating</th><th>Condition</th></tr>
            </thead>
            <tbody>
              <tr><td>Perfect</td><td>Score equals minimum</td></tr>
              <tr><td>Excellent</td><td>1-2 above minimum</td></tr>
              <tr><td>Good</td><td>3-5 above minimum</td></tr>
              <tr><td>Completed</td><td>Finished but above Good</td></tr>
            </tbody>
          </table>
        </div>

        <div id="variants" className="section">
          <h2>Variants</h2>
          <table>
            <thead>
              <tr><th>Variant</th><th>What You See</th><th>Strategy</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Face Up</strong></td>
                <td>All questions visible</td>
                <td>Plan the perfect route, then execute</td>
              </tr>
              <tr>
                <td><strong>Face Down</strong></td>
                <td>Topic colors only</td>
                <td>Route by color (your strengths)</td>
              </tr>
              <tr>
                <td><strong>Blind</strong></td>
                <td>No colors, no questions</td>
                <td>Full fog of war — stick to the diagonal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="tips" className="section">
          <h2>Tips & Strategy</h2>
          <ol>
            <li><strong>Survey before picking a corner.</strong> Look at which topics cluster near each corner.</li>
            <li><strong>Favor diagonal moves.</strong> Each diagonal move advances both row and column toward your goal.</li>
            <li><strong>Avoid dead ends.</strong> Check that a cell has multiple onward neighbors before tapping.</li>
            <li><strong>Use hints strategically.</strong> A small hint penalty is better than burning a critical cell.</li>
            <li><strong>Start small.</strong> A 4x4 board is great for learning the mechanics.</li>
            <li><strong>In Face Up mode, plan your full route before moving.</strong></li>
            <li><strong>In Blind mode, trust the diagonal.</strong> With no information, shortest path is best.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default HowToPlay
