import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  return (
    <div>
      {selectedSong ? (
        <>
          <h3>Details of the song:</h3>
          <p>
            Title:{selectedSong.title}
            <br />
            Duration: {selectedSong.duration}
          </p>
        </>
      ) : (
        "Select a song!"
      )}
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
