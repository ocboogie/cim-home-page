 * `^\d{3}[ -]?\d{2}[ -]?\d{4}`:
 Matches
  * `123-45-6789`
  * `521 76 1895`
  * `521761895`

 Does not match:
  * `123-123-1234`
  * `123 123 1234`
  * `wor-wo-word`
 * `^(?!000|666|999)d{3}[ -]?(?!00)\d{2}[ -]?(?!0000)\d{4}`:

 I'm pretty sure you put `d` instead of `\d`.
 So I'll be using `^(?!000|666|999)\d{3}[ -]?(?!00)\d{2}[ -]?(?!0000)\d{4}`.

 Matches
  * `123-45-6789`
  * `521 76 1895`
  * `521761895`
  * `651-01-8412`

 Does not match:
  * `000-81-8412`
  * `666 81 8412`
  * `999818412`
  * `651 00 8412`
  * `3-14-0000`

 * `[a-z]{2,}\d*@(saddleback|ivc)\.edu`:

 Matches:
  * `abcdefg123@saddleback.edu`
  * `ab123@ivc.edu`
  * `ab@ivc.edu`
  
 Does not match:
  * `a123@saddleback.edu`
  * `Ab123@saddleback.edu`
  * `Ab@saddleback.edu`
  * `abc@somethingelse.edu`
  * `abc@ivc.com`
  