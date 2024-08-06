import { useParams } from "react-router-dom";
import data from '../../assets/songs.json';

export const SongForm = () => {

    const { id } = useParams();
    const [song] = data.filter((song) => song.id === parseInt(id));

  return (
    <section className="section">
            <div className="columns is-centered">
                <div className="column is-4">
                    <form>
                        <div className="field">
                            <label htmlFor="username">Song name:</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    defaultValue={song.title}
                                    // onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="author">Author</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    id="author"
                                    name="author"
                                    defaultValue={song.owner}
                                    // onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button
                                    type="submit"
                                    className="button is-primary is-fullwidth"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}
