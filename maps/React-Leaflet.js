type Viewport = {
  center: [number, number],
  zoom: number,
}

type Props = {
  viewport: Viewport,
}

type State = {
  viewport: Viewport,
}

class MyMap extends Component<Props, State> {
  constructor(props: Props) {
    // Initialize the viewport to the one provided in props
    this.state = {
      viewport: props.viewport,
    }
  }

  componentWillReceiveProps({ viewport }: Props) {
    // When the provided viewport changes, apply it
    if (viewport !== this.props.viewport) {
      this.setState({ viewport })
    }
  }

  onClickReset = () => {
    // Reset to position provided in props
    this.setState({ viewport: this.props.viewport })
  }

  onViewportChanged = (viewport: Viewport) => {
    // The viewport got changed by the user, keep track in state
    this.setState({ viewport })
  }

  render() {
    return (
      <Map
        onClick={this.onClickReset}
        onViewportChanged={this.onViewportChanged}
        viewport={this.state.viewport}>
        ...
      </Map>
    )
  }
}
