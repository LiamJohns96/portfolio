<template>
  <div class="content">
    <H1>Tyro</H1>
    <h2>Setup in ZEDMED</h2>
    <CollapsibleInfo title="Tyro Terminals">
      <p>Tyro terminals are configured by Tyro. <br /></p>

      <ul>
        <li>
          <strong>Merchant ID (or MID)</strong> = The unique identifyer code
          used both for the specific client, and specific bank account.
        </li>
        <li>
          <strong>Terminal ID (or TID)</strong> = The ID for the specific
          terminal. Clients may have multiple terminals under the same MID, or
          use the same or different TID under different MIDs.
        </li>
      </ul>
      <br />
      <p>
        <strong>Note:</strong> Multiple Merchant IDs for a single client means
        they have setup the terminals for
        <strong>different bank accounts</strong>. Because either:
      </p>
      <ol>
        <li>They have different terminals for different or each doctor.</li>
        <li>
          Or, they have different terminals for different branches or banklists.
        </li>
      </ol>
      <br />
      <details>
        <summary>How do terminals connect to Zedmed?</summary>
        Tyro terminals connect independently via their own network (such as a
        mobile 4G or 5G network).
        <ul>
          <li>
            For on-prem clients: Pairing links the Tyro Terminal Adapter on the workstation to the specific Tyro terminal. Zedmed then communicates with that terminal through the adapter.
          </li>
          <li>
            For cloud clients: Pairing is not required (other than to get the
            required information). Zedcloud directly communicates with the Tyro
            terminals over the mobile network. Configuring the terminal via the
            Zedmed Utilities > Security is all that is required to establish a
            link to the terminal.
          </li>
        </ul>
      </details>
    </CollapsibleInfo>

    <CollapsibleInfo title="Tyro Terminal Setup">
      <p>
        For on-premise installations, the Tyro Terminal Adapter should normally
        be installed and configured by Tyro.
      </p>

      <p>
        <a
          href="https://help.zedmed.com.au/help/set-up-tyro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zedmed - Setup Tyro on-prem terminals
        </a>
      </p>

      <details>
        <summary><strong>Manually pair a Tyro terminal</strong></summary>

        <ol>
          <li>
            Locate the <strong>Merchant ID (MID)</strong> and
            <strong>Terminal ID (TID)</strong> on the Tyro terminal:
            <br />
            MENU → Configuration → Terminal Info
          </li>

          <li>
            On the workstation, open Tyro Terminal Adapter from Program Files
            x86 → Tyro
          </li>

          <li>
            Enter the terminal's <strong>Merchant ID</strong> and
            <strong>Terminal ID</strong>.
          </li>

          <li>
            On the Tyro terminal, go to:
            <br />
            MENU → Configuration → Integrated EFTPOS → Authorise POS
          </li>

          <li>Click "Start" or "Pair" on the Tyro Terminal Adapter</li>

          <li>Pairing should complete.</li>
        </ol>
      </details>

      <details>
        <summary>
          <strong>Configure the Tyro terminal in Zedmed</strong>
        </summary>

        <ol>
          <li>Open <strong>Utilities</strong> in Zedmed.</li>

          <li>Select <strong>Third Party Links</strong>.</li>

          <li>Tick to enable Tyro</li>

          <li>If available, enter the <strong>TID</strong>.</li>
        </ol>
      </details>

      <details>
        <summary>
          <strong>If required: configure Merchant IDs for bank accounts</strong>
        </summary>

        <p>
          This is only required when the practice uses multiple bank accounts
          with Tyro.
        </p>

        <ol>
          <li>Open <strong>Management</strong>.</li>

          <li>
            Go to
            <strong>Practice Setup → Bank Account → Banklists</strong>.
          </li>

          <li>
            Select the required bank account from the
            <strong>Name</strong> field.
          </li>

          <li>
            Enter that account's <strong>Merchant ID (MID)</strong> in the
            <strong>MID</strong> field.
          </li>

          <li>Repeat for any other Tyro bank accounts.</li>

          <li>Select <strong>Close</strong> to save.</li>
        </ol>
      </details>
    </CollapsibleInfo>

    <CollapsibleInfo title="Errors">
      <p>Common Tyro errors in Zedmed and what they mean:</p>

      <details>
        <summary>
          <strong
            >403 (or sometimes 404) - "an error occurred while processing
            transaction with tyro. Invalid pairing – please pair again with the
            terminal."</strong
          >
        </summary>
        <br />
        <p>
          First check the MID and TID have been entered correctly (either in
          Third Party Links for on-prem or Security window for Cloud).
        </p>
        <br />

        This could also be because they have selected the wrong banklist when
        billing or are using the wrong terminal for the banklist.<br />

        Remember:
        <strong
          >Terminals are linked with banklists. You cannot use the wrong
          terminal for the wrong banklist.</strong
        >

        <br />The solution would be:
        <ul>
          <li>
            Check the terminal's MID they are using matches the banklist. Go
            Practice Setup > Bank Accounts > Banklists > select the correct
            banklist and check what MID is entered. Does it match this
            Terminal's MID?
          </li>
          <li>
            When they logged in, did they select the correct Tyro Terminal (if
            you have multiple terminals configured, you select the terminal you
            are using when logging in. To switch you must close and re-open
            Zedmed.)
          </li>
        </ul>
        <br />

        More info:
        <a
          href=" https://help.zedmed.com.au/help/tyro-terminal-selector"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tyro Terminal selector
        </a>
      </details>
    </CollapsibleInfo>
  </div>
</template>

<script setup>
import CollapsibleInfo from "../components/CollapsibleInfo.vue";
</script>

<style scoped>
h1 {
  color: rgb(0, 0, 0);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin-left: -1px;
}
h2 {
  color: rgb(0, 0, 0);
  align-self: center;
  font-family: "Courier New", Courier, monospace;
  margin-left: -1px;
  margin-bottom: 20px;
}
a {
  color: rgb(201, 60, 60);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bolder;
  font-size: 20px;
}
summary {
  color: rgb(24, 22, 149);
}
.content {
  margin-left: 10%;
  margin-right: 10%;
  font-family: Arial, Helvetica, sans-serif;
  /* font-weight: 600; */
}
</style>
