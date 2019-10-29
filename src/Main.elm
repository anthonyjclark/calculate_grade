module Main exposing (main)

import Browser
import Html exposing (Html, button, div, text, textarea)
import Html.Events exposing (onClick, onInput)


type alias Model =
    { userData : String }


initialModel : Model
initialModel =
    { userData = "" }


type Msg
  = Change String
  | ResetForm


update : Msg -> Model -> Model
update msg model =
    case msg of
        Change gradeData ->
            { model | userData = gradeData }
        ResetForm ->
            { userData = "" }


view : Model -> Html Msg
view model =
    if model.userData == "" then
        div [] [ textarea [ onInput Change ] [] ]
    else
        div []
          [ button [ onClick ResetForm ] [ text "Reset" ]
          , div [] [ text model.userData ]
          ]



main : Program () Model Msg
main =
    Browser.sandbox
        { init = initialModel
        , view = view
        , update = update
        }
