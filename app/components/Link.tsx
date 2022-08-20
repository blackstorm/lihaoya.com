type ExternalLinkProps = {
  url: string
  title: string
  newTab?: boolean
  nofollow?: boolean
}

export function ExternalLink({ url, title, newTab = true, nofollow = true }: ExternalLinkProps) {
  return (
    <a className="text-blue-700 hover:underline" href={url} target={newTab ? '_blank' : '_self'} rel={nofollow ? 'nofollow' : undefined}>
      {title}
    </a>
  )
}