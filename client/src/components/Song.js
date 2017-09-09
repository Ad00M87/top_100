import React from 'react';

const styles = {
  pointer: {
    cursor: 'pointer'
  }
}

const Song = ({ id, title, artist, rank, updateSong, deleteSong }) => (
  <div className="col s12">
    <div className="col m10">
      <div className="center">
        { title }
      </div>
    </div>
    <div className="col m2">
      <div
        style={ styles.pointer }
        onClick={() => deleteSong(id) }
      >
        X
      </div>
    </div>
  </div>
)

export default Song;
