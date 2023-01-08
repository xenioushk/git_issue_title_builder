$(function () {
  var $btnConvert = $("#btn_convert"),
    $btnClear = $("#btn_clear"),
    $btnCopy = $("#btn_copy"),
    $issueType = $("#issue_type"),
    $orgText = $("#org_text"),
    $modText = $("#mod_text"),
    $input_fields = $([]).add($orgText).add($modText).add($issueType),
    $slug_key = "-"

  $input_fields.val("")

  function conv_text() {
    return `${$issueType.val()}/${$orgText.val().trim().replace(/ /gi, $slug_key).toLowerCase()}`
  }

  // Key Change.

  $issueType.on("change", function () {
    if ($(this).val() === "") {
      $([]).add($orgText).add($modText).val("")
    } else {
      $modText.val("").val(conv_text())
    }
  })

  $orgText.on("keyup", function () {
    $modText.val("").val(conv_text())
  })

  $btnConvert.on("click", function () {
    $modText.val(conv_text())
  })

  $btnClear.on("click", function () {
    $input_fields.val("")
  })

  // Copy Button.

  $btnCopy.on("click", function () {
    // Get the text field
    var copyText = document.getElementById("mod_text")

    // Select the text field
    copyText.select()
    copyText.setSelectionRange(0, 99999) // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value)

    // Alert the copied text
    // alert("Copied the text: " + copyText.value)
    // alert("Text Copied!")

    var $alertMessageContainer = document.querySelector(".container__alert_message")

    $alertMessageContainer.innerHTML = "Text Copied!"
    setTimeout(() => {
      $alertMessageContainer.innerHTML = ""
    }, 2000)
  })
})
