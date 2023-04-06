import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// OPCIÓN 1A: Importamos los iconos desde cada uno de los archivos
import { IconFile as IconFileSeparated } from "~/components/icons/icon-file";
import { IconMusic as IconMusicSeparated } from "~/components/icons/icon-music";
import { IconUser as IconUserSeparated } from "~/components/icons/icon-user";

// Option 1B: Importamos los iconos desde un archivo que los importa y los exporta
import {
  IconFile as IconFileIndex,
  IconMusic as IconMusicIndex,
  IconUser as IconUserIndex,
} from "~/components/icons/";

// Option 2: Importamos los iconos desde un único archivo.
import { IconFile, IconMusic, IconUser } from "~/components/icons/icons-group";

// Option 3: Importamos el icon manager, y le pasamos el nombre del icono que queremos renderizar
import { IconManager } from "~/components/icons/icon-manager";

export default component$(() => {
  return (
    <div class="app">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <h1>Icons Manager</h1>
        <a
          class="btn"
          target="_blank"
          rel="nofollow noopener"
          href="https://github.com/manuelsanchezweb/icons-manager"
        >
          Ver repo
        </a>
      </div>

      <p>Tenemos tres opciones:</p>
      <ol>
        <li>
          <p>
            Tenemos archivos separados por cada Icon, y hacemos un import desde
            ahí. <strong>Mayor desventaja</strong> : mucho código importado.
          </p>
          <div>
            <IconFileSeparated />
            <IconMusicSeparated />
            <IconUserSeparated />
          </div>
          <p>
            Esto se puede solucionar si tenemos un archivo que importe todos los
            iconos y los exporte.
          </p>
          <div>
            <IconFileIndex />
            <IconMusicIndex />
            <IconUserIndex />
          </div>
        </li>
        <li>
          Tenemos todos los icons en un archivo único. Esto funciona genial
          cuando tenemos pocos icons, como es este caso, pero cuando se empieza
          a tener muchos, se vuelve un archivo muy grande y difícil de leer.
          <div>
            <IconFile />
            <IconMusic />
            <IconUser />
          </div>
        </li>
        <li>
          Tenemos un archivo que se encarga de hacer un handle de los iconos, y
          entonces nos quitamos todos los imports de este file. Échale un
          vistazo en mi código al archivo <code>icon-manager.tsx</code>
        </li>
        <div>
          <IconManager icon="file" />
          <IconManager icon="music" />
          <IconManager icon="user" />
        </div>
      </ol>

      <p>
        Todos los icons son de{" "}
        <a
          target="_blank"
          rel="noopener nofollow"
          href="https://www.bee-icons.com/"
        >
          bee-icons
        </a>
        .
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
