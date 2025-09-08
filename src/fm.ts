import AudioFileIcon from "@material-design-icons/svg/outlined/audio_file.svg";
import DescriptionIcon from "@material-design-icons/svg/outlined/description.svg";
import ExtensionIcon from "@material-design-icons/svg/outlined/extension.svg";
import FolderIcon from "@material-design-icons/svg/outlined/folder.svg";
import ImageIcon from "@material-design-icons/svg/outlined/image.svg";
import InsertDriveFileIcon from "@material-design-icons/svg/outlined/insert_drive_file.svg";
import SettingsIcon from "@material-design-icons/svg/outlined/settings.svg";
import SportsEsportsIcon from "@material-design-icons/svg/outlined/sports_esports.svg";
import UndoIcon from "@material-design-icons/svg/outlined/undo.svg";
import VideoFileIcon from "@material-design-icons/svg/outlined/video_file.svg";
import dayjs from "dayjs";

export interface FileManagerEntry {
  name: string;
  size: number;
  mtime: number;
  isDirectory: boolean;
  isHidden: boolean;
  isSystem: boolean;
  isReadonly: boolean;
}

export function formatSize(size: number): string {
  if (size < 1024) return `${size} B`;

  const units = ["kB", "MB", "GB", "TB", "PB"];
  let unitIndex = -1;
  let value = size;

  do {
    value /= 1024;
    unitIndex++;
  } while (value >= 1024 && unitIndex < units.length - 1);

  const formatted = value % 1 === 0 ? value.toString() : value.toFixed(2).replace(/\.?0+$/, "");

  return `${formatted} ${units[unitIndex]}`;
}

export function formatTimestamp(ts: number) {
  return dayjs.unix(ts / 1000).format("YYYY-MM-DD HH:mm:ss");
}

export function getAttributes(entry: FileManagerEntry) {
  return [
    entry.isDirectory ? "d" : "-",
    entry.isReadonly ? "r" : "-",
    entry.isHidden ? "h" : "-",
    entry.isSystem ? "s" : "-",
  ].join("");
}

export function getTypeIcon(entry: FileManagerEntry) {
  const fileType = getFileTypeByExtension(entry.name);

  if (entry.isDirectory) {
    return entry.name === ".." ? UndoIcon : FolderIcon;
  }

  const icons = {
    image: ImageIcon,
    video: VideoFileIcon,
    audio: AudioFileIcon,
    text: DescriptionIcon,
    executable: ExtensionIcon,
    java: SportsEsportsIcon,
    config: SettingsIcon,
    unknown: InsertDriveFileIcon,
  };
  return icons[fileType] ?? icons.unknown;
}

function getFileTypeByExtension(fileName: string) {
  if (fileName.match(/\.(png|jpg|jpeg|gif|wbmp|bmp)$/i)) {
    return "image";
  } else if (fileName.match(/\.(3gp|mp4|mov|avi)$/i)) {
    return "video";
  } else if (fileName.match(/\.(mp3|aac|wav|midi|srt|mmf)$/i)) {
    return "audio";
  } else if (fileName.match(/\.(txt|jad)$/i)) {
    return "text";
  } else if (fileName.match(/\.(elf)$/i)) {
    return "executable";
  } else if (fileName.match(/\.(jar)$/i)) {
    return "java";
  } else if (fileName.match(/\.(bcfg|ini|pd|cfg)$/i)) {
    return "config";
  } else {
    return "unknown";
  }
}
