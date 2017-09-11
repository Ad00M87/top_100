class Api::SongsController < ApplicationController
  before_action :get_song, only: [:update, :destroy]

  def index
    render json: Song.all
  end

  def create
    song = Song.new(song_params)
    if song.save
      render json: song
    else
      render_error(song)
    end
  end

  def update
    if @song.update
      render json: @song
    else
      render_error(@song)
    end
  end

  def destroy
    @song.destroy
  end

  private

    def song_params
      params.require(:song).permit(:title, :artist)
    end

    def get_song
      @song = Song.find(params[:id])
    end

    def render_error(song)
      errors = song.errors.full_message.join(", ")
      render json: { errors: errors }, status 418
    end

end
