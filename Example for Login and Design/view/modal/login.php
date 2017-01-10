<!-- Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">

    <form method="post" action="?form=userVerification">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Logga in (Bara Admin)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
                <label for="username">Användarnamn:</label>
                <input name="username" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label for="password">Lösenord:</label>
                <input name="password" type="password" class="form-control" />
            </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Stäng</button>
        <button type="submit" class="btn btn-primary">Logga in</button>
      </div>
    </div>
  </form>

  </div>
</div>
